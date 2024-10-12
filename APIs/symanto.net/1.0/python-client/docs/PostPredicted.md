# PostPredicted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | id of the post. | [optional] 
**predictions** | [**List[Prediction]**](Prediction.md) | the list of predictions. | 

## Example

```python
from openapi_client.models.post_predicted import PostPredicted

# TODO update the JSON string below
json = "{}"
# create an instance of PostPredicted from a JSON string
post_predicted_instance = PostPredicted.from_json(json)
# print the JSON string representation of the object
print(PostPredicted.to_json())

# convert the object into a dict
post_predicted_dict = post_predicted_instance.to_dict()
# create an instance of PostPredicted from a dict
post_predicted_from_dict = PostPredicted.from_dict(post_predicted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


