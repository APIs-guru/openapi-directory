# Expansions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media** | [**List[Media]**](Media.md) |  | [optional] 
**places** | [**List[Place]**](Place.md) |  | [optional] 
**polls** | [**List[Poll]**](Poll.md) |  | [optional] 
**topics** | [**List[Topic]**](Topic.md) |  | [optional] 
**tweets** | [**List[Tweet]**](Tweet.md) |  | [optional] 
**users** | [**List[User]**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.expansions import Expansions

# TODO update the JSON string below
json = "{}"
# create an instance of Expansions from a JSON string
expansions_instance = Expansions.from_json(json)
# print the JSON string representation of the object
print(Expansions.to_json())

# convert the object into a dict
expansions_dict = expansions_instance.to_dict()
# create an instance of Expansions from a dict
expansions_from_dict = Expansions.from_dict(expansions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


