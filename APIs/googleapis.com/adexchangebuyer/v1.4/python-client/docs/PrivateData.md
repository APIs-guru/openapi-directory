# PrivateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **str** |  | [optional] 
**reference_payload** | **bytearray** |  | [optional] 

## Example

```python
from openapi_client.models.private_data import PrivateData

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateData from a JSON string
private_data_instance = PrivateData.from_json(json)
# print the JSON string representation of the object
print(PrivateData.to_json())

# convert the object into a dict
private_data_dict = private_data_instance.to_dict()
# create an instance of PrivateData from a dict
private_data_from_dict = PrivateData.from_dict(private_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


