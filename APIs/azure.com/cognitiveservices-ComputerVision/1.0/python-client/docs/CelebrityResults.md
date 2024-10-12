# CelebrityResults

List of celebrities recognized in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrities** | [**List[CelebritiesModel]**](CelebritiesModel.md) |  | [optional] 
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the REST API request. | [optional] 

## Example

```python
from openapi_client.models.celebrity_results import CelebrityResults

# TODO update the JSON string below
json = "{}"
# create an instance of CelebrityResults from a JSON string
celebrity_results_instance = CelebrityResults.from_json(json)
# print the JSON string representation of the object
print(CelebrityResults.to_json())

# convert the object into a dict
celebrity_results_dict = celebrity_results_instance.to_dict()
# create an instance of CelebrityResults from a dict
celebrity_results_from_dict = CelebrityResults.from_dict(celebrity_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


