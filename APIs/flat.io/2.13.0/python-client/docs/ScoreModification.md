# ScoreModification

Edit the score metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arranger** | **str** | The arranger of the score | [optional] 
**composer** | **str** | The composer of the score | [optional] 
**creation_type** | [**ScoreCreationType**](ScoreCreationType.md) |  | [optional] 
**description** | **str** | Description of the creation | [optional] 
**license** | [**ScoreLicense**](ScoreLicense.md) |  | [optional] 
**license_text** | **str** | The rights info written on the score | [optional] 
**lyricist** | **str** | The lyricist of the score | [optional] 
**privacy** | [**ScorePrivacy**](ScorePrivacy.md) |  | [optional] 
**sharing_key** | **str** | When using the &#x60;privacy&#x60; mode &#x60;privateLink&#x60;, this property can be used to set a custom sharing key, otherwise a new key will be generated. | [optional] 
**subtitle** | **str** | The subtitle of the score | [optional] 
**tags** | **List[str]** | Tags describing the score | [optional] 
**title** | **str** | The title of the score | [optional] 

## Example

```python
from openapi_client.models.score_modification import ScoreModification

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreModification from a JSON string
score_modification_instance = ScoreModification.from_json(json)
# print the JSON string representation of the object
print(ScoreModification.to_json())

# convert the object into a dict
score_modification_dict = score_modification_instance.to_dict()
# create an instance of ScoreModification from a dict
score_modification_from_dict = ScoreModification.from_dict(score_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


