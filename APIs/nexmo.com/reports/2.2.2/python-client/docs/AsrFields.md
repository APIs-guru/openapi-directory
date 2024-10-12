# AsrFields

ASR

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | [**Direction**](Direction.md) |  | [optional] 
**var_from** | **str** | Request from this number. | [optional] 
**product** | [**ProductAsr**](ProductAsr.md) |  | [optional] 
**status** | [**AsrStatus**](AsrStatus.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.asr_fields import AsrFields

# TODO update the JSON string below
json = "{}"
# create an instance of AsrFields from a JSON string
asr_fields_instance = AsrFields.from_json(json)
# print the JSON string representation of the object
print(AsrFields.to_json())

# convert the object into a dict
asr_fields_dict = asr_fields_instance.to_dict()
# create an instance of AsrFields from a dict
asr_fields_from_dict = AsrFields.from_dict(asr_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


