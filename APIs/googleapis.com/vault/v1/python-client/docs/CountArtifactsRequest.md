# CountArtifactsRequest

Count artifacts request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**Query**](Query.md) |  | [optional] 
**view** | **str** | Sets the granularity of the count results. | [optional] 

## Example

```python
from openapi_client.models.count_artifacts_request import CountArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CountArtifactsRequest from a JSON string
count_artifacts_request_instance = CountArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(CountArtifactsRequest.to_json())

# convert the object into a dict
count_artifacts_request_dict = count_artifacts_request_instance.to_dict()
# create an instance of CountArtifactsRequest from a dict
count_artifacts_request_from_dict = CountArtifactsRequest.from_dict(count_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


