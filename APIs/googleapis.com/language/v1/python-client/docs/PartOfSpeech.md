# PartOfSpeech

Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect** | **str** | The grammatical aspect. | [optional] 
**case** | **str** | The grammatical case. | [optional] 
**form** | **str** | The grammatical form. | [optional] 
**gender** | **str** | The grammatical gender. | [optional] 
**mood** | **str** | The grammatical mood. | [optional] 
**number** | **str** | The grammatical number. | [optional] 
**person** | **str** | The grammatical person. | [optional] 
**proper** | **str** | The grammatical properness. | [optional] 
**reciprocity** | **str** | The grammatical reciprocity. | [optional] 
**tag** | **str** | The part of speech tag. | [optional] 
**tense** | **str** | The grammatical tense. | [optional] 
**voice** | **str** | The grammatical voice. | [optional] 

## Example

```python
from openapi_client.models.part_of_speech import PartOfSpeech

# TODO update the JSON string below
json = "{}"
# create an instance of PartOfSpeech from a JSON string
part_of_speech_instance = PartOfSpeech.from_json(json)
# print the JSON string representation of the object
print(PartOfSpeech.to_json())

# convert the object into a dict
part_of_speech_dict = part_of_speech_instance.to_dict()
# create an instance of PartOfSpeech from a dict
part_of_speech_from_dict = PartOfSpeech.from_dict(part_of_speech_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


