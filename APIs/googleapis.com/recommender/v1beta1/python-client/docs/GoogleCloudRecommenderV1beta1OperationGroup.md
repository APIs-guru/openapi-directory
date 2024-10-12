# GoogleCloudRecommenderV1beta1OperationGroup

Group of operations that need to be performed atomically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[GoogleCloudRecommenderV1beta1Operation]**](GoogleCloudRecommenderV1beta1Operation.md) | List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_operation_group import GoogleCloudRecommenderV1beta1OperationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1OperationGroup from a JSON string
google_cloud_recommender_v1beta1_operation_group_instance = GoogleCloudRecommenderV1beta1OperationGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1OperationGroup.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_operation_group_dict = google_cloud_recommender_v1beta1_operation_group_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1OperationGroup from a dict
google_cloud_recommender_v1beta1_operation_group_from_dict = GoogleCloudRecommenderV1beta1OperationGroup.from_dict(google_cloud_recommender_v1beta1_operation_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


