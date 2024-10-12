# PayloadFile

Payload file for inline import job payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | The file data. | [optional] 
**name** | **str** | The file name. | [optional] 

## Example

```python
from openapi_client.models.payload_file import PayloadFile

# TODO update the JSON string below
json = "{}"
# create an instance of PayloadFile from a JSON string
payload_file_instance = PayloadFile.from_json(json)
# print the JSON string representation of the object
print(PayloadFile.to_json())

# convert the object into a dict
payload_file_dict = payload_file_instance.to_dict()
# create an instance of PayloadFile from a dict
payload_file_from_dict = PayloadFile.from_dict(payload_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


