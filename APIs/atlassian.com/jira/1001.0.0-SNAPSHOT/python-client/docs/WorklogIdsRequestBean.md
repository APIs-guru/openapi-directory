# WorklogIdsRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[int]** | A list of worklog IDs. | 

## Example

```python
from openapi_client.models.worklog_ids_request_bean import WorklogIdsRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of WorklogIdsRequestBean from a JSON string
worklog_ids_request_bean_instance = WorklogIdsRequestBean.from_json(json)
# print the JSON string representation of the object
print(WorklogIdsRequestBean.to_json())

# convert the object into a dict
worklog_ids_request_bean_dict = worklog_ids_request_bean_instance.to_dict()
# create an instance of WorklogIdsRequestBean from a dict
worklog_ids_request_bean_from_dict = WorklogIdsRequestBean.from_dict(worklog_ids_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


