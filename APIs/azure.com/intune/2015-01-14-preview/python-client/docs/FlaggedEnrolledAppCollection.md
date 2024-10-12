# FlaggedEnrolledAppCollection

Flagged Enrolled App collection for the given tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[FlaggedEnrolledApp]**](FlaggedEnrolledApp.md) |  | 

## Example

```python
from openapi_client.models.flagged_enrolled_app_collection import FlaggedEnrolledAppCollection

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedEnrolledAppCollection from a JSON string
flagged_enrolled_app_collection_instance = FlaggedEnrolledAppCollection.from_json(json)
# print the JSON string representation of the object
print(FlaggedEnrolledAppCollection.to_json())

# convert the object into a dict
flagged_enrolled_app_collection_dict = flagged_enrolled_app_collection_instance.to_dict()
# create an instance of FlaggedEnrolledAppCollection from a dict
flagged_enrolled_app_collection_from_dict = FlaggedEnrolledAppCollection.from_dict(flagged_enrolled_app_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


