# License

License information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Comments | [optional] 
**expression** | **str** | Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: \&quot;LGPL-2.1-only OR MIT\&quot;, \&quot;LGPL-2.1-only AND MIT\&quot;, \&quot;GPL-2.0-or-later WITH Bison-exception-2.2\&quot;. | [optional] 

## Example

```python
from openapi_client.models.license import License

# TODO update the JSON string below
json = "{}"
# create an instance of License from a JSON string
license_instance = License.from_json(json)
# print the JSON string representation of the object
print(License.to_json())

# convert the object into a dict
license_dict = license_instance.to_dict()
# create an instance of License from a dict
license_from_dict = License.from_dict(license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


