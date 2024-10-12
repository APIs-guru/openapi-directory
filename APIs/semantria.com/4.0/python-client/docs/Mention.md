# Mention


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_negated** | **bool** | Indicates whether or not the mention has been negated | 
**label** | **str** | The text of the attribute mention | 
**locations** | [**List[Location]**](Location.md) | List of coordinates of the mentions found within the collection | 
**negating_phrase** | **str** | If the mention has been negated, this gives the negating phrase | 

## Example

```python
from openapi_client.models.mention import Mention

# TODO update the JSON string below
json = "{}"
# create an instance of Mention from a JSON string
mention_instance = Mention.from_json(json)
# print the JSON string representation of the object
print(Mention.to_json())

# convert the object into a dict
mention_dict = mention_instance.to_dict()
# create an instance of Mention from a dict
mention_from_dict = Mention.from_dict(mention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


