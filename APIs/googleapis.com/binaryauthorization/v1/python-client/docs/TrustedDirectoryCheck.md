# TrustedDirectoryCheck

A trusted directory check, which rejects images that do not come from the set of user-configured trusted directories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trusted_dir_patterns** | **List[str]** | Required. List of trusted directory patterns. A pattern is in the form \&quot;registry/path/to/directory\&quot;. The registry domain part is defined as two or more dot-separated words, e.g., &#x60;us.pkg.dev&#x60;, or &#x60;gcr.io&#x60;. Additionally, &#x60;*&#x60; can be used in three ways as wildcards: 1. leading &#x60;*&#x60; to match varying prefixes in registry subdomain (useful for location prefixes); 2. trailing &#x60;*&#x60; after registry/ to match varying endings; 3. trailing &#x60;**&#x60; after registry/ to match \&quot;/\&quot; as well. For example: -- &#x60;gcr.io/my-project/my-repo&#x60; is valid to match a single directory -- &#x60;*-docker.pkg.dev/my-project/my-repo&#x60; or &#x60;*.gcr.io/my-project&#x60; are valid to match varying prefixes -- &#x60;gcr.io/my-project/*&#x60; will match all direct directories in &#x60;my-project&#x60; -- &#x60;gcr.io/my-project/**&#x60; would match all directories in &#x60;my-project&#x60; -- &#x60;gcr.i*&#x60; is not allowed since the registry is not completely specified -- &#x60;sub*domain.gcr.io/nginx&#x60; is not valid because only leading &#x60;*&#x60; or trailing &#x60;*&#x60; are allowed. -- &#x60;*pkg.dev/my-project/my-repo&#x60; is not valid because leading &#x60;*&#x60; can only match subdomain -- &#x60;**-docker.pkg.dev&#x60; is not valid because one leading &#x60;*&#x60; is allowed, and that it cannot match &#x60;/&#x60; | [optional] 

## Example

```python
from openapi_client.models.trusted_directory_check import TrustedDirectoryCheck

# TODO update the JSON string below
json = "{}"
# create an instance of TrustedDirectoryCheck from a JSON string
trusted_directory_check_instance = TrustedDirectoryCheck.from_json(json)
# print the JSON string representation of the object
print(TrustedDirectoryCheck.to_json())

# convert the object into a dict
trusted_directory_check_dict = trusted_directory_check_instance.to_dict()
# create an instance of TrustedDirectoryCheck from a dict
trusted_directory_check_from_dict = TrustedDirectoryCheck.from_dict(trusted_directory_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


