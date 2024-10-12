# SerDeInfo

Serializer and deserializer information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serialization_lib** | **str** | The fully qualified Java class name of the serialization library. | [optional] 

## Example

```python
from openapi_client.models.ser_de_info import SerDeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SerDeInfo from a JSON string
ser_de_info_instance = SerDeInfo.from_json(json)
# print the JSON string representation of the object
print(SerDeInfo.to_json())

# convert the object into a dict
ser_de_info_dict = ser_de_info_instance.to_dict()
# create an instance of SerDeInfo from a dict
ser_de_info_from_dict = SerDeInfo.from_dict(ser_de_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


