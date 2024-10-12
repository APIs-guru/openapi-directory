# ListDagRunsForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_ids** | **List[str]** | Return objects with specific DAG IDs. The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 
**end_date_gte** | **datetime** | Returns objects greater or equal the specified date.  This can be combined with end_date_lte parameter to receive only the selected period.  | [optional] 
**end_date_lte** | **datetime** | Returns objects less than or equal to the specified date.  This can be combined with end_date_gte parameter to receive only the selected period.  | [optional] 
**execution_date_gte** | **datetime** | Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte key to receive only the selected period.  | [optional] 
**execution_date_lte** | **datetime** | Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte key to receive only the selected period.  | [optional] 
**order_by** | **str** | The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 
**page_limit** | **int** | The numbers of items to return. | [optional] [default to 100]
**page_offset** | **int** | The number of items to skip before starting to collect the result set. | [optional] 
**start_date_gte** | **datetime** | Returns objects greater or equal the specified date.  This can be combined with start_date_lte key to receive only the selected period.  | [optional] 
**start_date_lte** | **datetime** | Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period  | [optional] 
**states** | **List[str]** | Return objects with specific states. The value can be repeated to retrieve multiple matching values (OR condition). | [optional] 

## Example

```python
from openapi_client.models.list_dag_runs_form import ListDagRunsForm

# TODO update the JSON string below
json = "{}"
# create an instance of ListDagRunsForm from a JSON string
list_dag_runs_form_instance = ListDagRunsForm.from_json(json)
# print the JSON string representation of the object
print(ListDagRunsForm.to_json())

# convert the object into a dict
list_dag_runs_form_dict = list_dag_runs_form_instance.to_dict()
# create an instance of ListDagRunsForm from a dict
list_dag_runs_form_from_dict = ListDagRunsForm.from_dict(list_dag_runs_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


