# ListAllProjectSnapshots200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshots** | [**List[ListAllProjectSnapshots200ResponseSnapshotsInner]**](ListAllProjectSnapshots200ResponseSnapshotsInner.md) | A list of the project&#39;s snapshots, ordered according to date (latest first). | [optional] 
**total** | **float** | The total number of results | [optional] 

## Example

```python
from openapi_client.models.list_all_project_snapshots200_response import ListAllProjectSnapshots200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectSnapshots200Response from a JSON string
list_all_project_snapshots200_response_instance = ListAllProjectSnapshots200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectSnapshots200Response.to_json())

# convert the object into a dict
list_all_project_snapshots200_response_dict = list_all_project_snapshots200_response_instance.to_dict()
# create an instance of ListAllProjectSnapshots200Response from a dict
list_all_project_snapshots200_response_from_dict = ListAllProjectSnapshots200Response.from_dict(list_all_project_snapshots200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


