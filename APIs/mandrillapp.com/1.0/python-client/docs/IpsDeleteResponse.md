# IpsDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**ip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ips_delete_response import IpsDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IpsDeleteResponse from a JSON string
ips_delete_response_instance = IpsDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(IpsDeleteResponse.to_json())

# convert the object into a dict
ips_delete_response_dict = ips_delete_response_instance.to_dict()
# create an instance of IpsDeleteResponse from a dict
ips_delete_response_from_dict = IpsDeleteResponse.from_dict(ips_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


