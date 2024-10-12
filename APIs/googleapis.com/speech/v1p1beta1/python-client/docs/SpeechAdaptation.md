# SpeechAdaptation

Speech adaptation configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abnf_grammar** | [**ABNFGrammar**](ABNFGrammar.md) |  | [optional] 
**custom_classes** | [**List[CustomClass]**](CustomClass.md) | A collection of custom classes. To specify the classes inline, leave the class&#39; &#x60;name&#x60; blank and fill in the rest of its fields, giving it a unique &#x60;custom_class_id&#x60;. Refer to the inline defined class in phrase hints by its &#x60;custom_class_id&#x60;. | [optional] 
**phrase_set_references** | **List[str]** | A collection of phrase set resource names to use. | [optional] 
**phrase_sets** | [**List[PhraseSet]**](PhraseSet.md) | A collection of phrase sets. To specify the hints inline, leave the phrase set&#39;s &#x60;name&#x60; blank and fill in the rest of its fields. Any phrase set can use any custom class. | [optional] 

## Example

```python
from openapi_client.models.speech_adaptation import SpeechAdaptation

# TODO update the JSON string below
json = "{}"
# create an instance of SpeechAdaptation from a JSON string
speech_adaptation_instance = SpeechAdaptation.from_json(json)
# print the JSON string representation of the object
print(SpeechAdaptation.to_json())

# convert the object into a dict
speech_adaptation_dict = speech_adaptation_instance.to_dict()
# create an instance of SpeechAdaptation from a dict
speech_adaptation_from_dict = SpeechAdaptation.from_dict(speech_adaptation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


