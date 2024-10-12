# DefaultShareScope

Details of the scope of the default sharing for new filters and dashboards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | The scope of the default sharing for new filters and dashboards:   *  &#x60;AUTHENTICATED&#x60; Shared with all logged-in users.  *  &#x60;GLOBAL&#x60; Shared with all logged-in users. This shows as &#x60;AUTHENTICATED&#x60; in the response.  *  &#x60;PRIVATE&#x60; Not shared with any users. | 

## Example

```python
from openapi_client.models.default_share_scope import DefaultShareScope

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultShareScope from a JSON string
default_share_scope_instance = DefaultShareScope.from_json(json)
# print the JSON string representation of the object
print(DefaultShareScope.to_json())

# convert the object into a dict
default_share_scope_dict = default_share_scope_instance.to_dict()
# create an instance of DefaultShareScope from a dict
default_share_scope_from_dict = DefaultShareScope.from_dict(default_share_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


