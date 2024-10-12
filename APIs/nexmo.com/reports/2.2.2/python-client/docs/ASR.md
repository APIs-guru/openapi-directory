# ASR

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
from openapi_client.models.asr import ASR

# TODO update the JSON string below
json = "{}"
# create an instance of ASR from a JSON string
asr_instance = ASR.from_json(json)
# print the JSON string representation of the object
print(ASR.to_json())

# convert the object into a dict
asr_dict = asr_instance.to_dict()
# create an instance of ASR from a dict
asr_from_dict = ASR.from_dict(asr_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


