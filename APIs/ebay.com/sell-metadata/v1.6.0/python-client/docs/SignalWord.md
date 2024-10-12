# SignalWord

A type that describes signal words for hazardous materials labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signal_word_description** | **str** | The description of the signal word localized to the default language of the marketplace. For more information, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal&#39;&gt;Signal word information&lt;/a&gt;. | [optional] 
**signal_word_id** | **str** | The identifier of the signal word. For more information, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal&#39;&gt;Signal word information&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.signal_word import SignalWord

# TODO update the JSON string below
json = "{}"
# create an instance of SignalWord from a JSON string
signal_word_instance = SignalWord.from_json(json)
# print the JSON string representation of the object
print(SignalWord.to_json())

# convert the object into a dict
signal_word_dict = signal_word_instance.to_dict()
# create an instance of SignalWord from a dict
signal_word_from_dict = SignalWord.from_dict(signal_word_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


