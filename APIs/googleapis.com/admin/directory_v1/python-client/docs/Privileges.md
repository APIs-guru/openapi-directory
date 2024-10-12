# Privileges


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Privilege]**](Privilege.md) | A list of Privilege resources. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#privileges&#x60;. | [optional] [default to 'admin#directory#privileges']

## Example

```python
from openapi_client.models.privileges import Privileges

# TODO update the JSON string below
json = "{}"
# create an instance of Privileges from a JSON string
privileges_instance = Privileges.from_json(json)
# print the JSON string representation of the object
print(Privileges.to_json())

# convert the object into a dict
privileges_dict = privileges_instance.to_dict()
# create an instance of Privileges from a dict
privileges_from_dict = Privileges.from_dict(privileges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


