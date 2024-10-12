# Dice

This object represents an animated emoji that displays a random value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | **str** | Emoji on which the dice throw animation is based | 
**value** | **int** | Value of the dice, 1-6 for “&lt;img alt&#x3D;\&quot;🎲\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB2.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” and “&lt;img alt&#x3D;\&quot;🎯\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EAF.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” base emoji, 1-5 for “&lt;img alt&#x3D;\&quot;🏀\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8F80.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” and “&lt;img alt&#x3D;\&quot;⚽\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/E29ABD.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” base emoji, 1-64 for “&lt;img alt&#x3D;\&quot;🎰\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB0.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” base emoji | 

## Example

```python
from openapi_client.models.dice import Dice

# TODO update the JSON string below
json = "{}"
# create an instance of Dice from a JSON string
dice_instance = Dice.from_json(json)
# print the JSON string representation of the object
print(Dice.to_json())

# convert the object into a dict
dice_dict = dice_instance.to_dict()
# create an instance of Dice from a dict
dice_from_dict = Dice.from_dict(dice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


