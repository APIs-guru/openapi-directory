# USqlDistributionInfo

A Data Lake Analytics catalog U-SQL distribution information object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | the count of indices using this distribution. | [optional] 
**dynamic_count** | **int** | the dynamic count of indices using this distribution. | [optional] 
**keys** | [**List[USqlDirectedColumn]**](USqlDirectedColumn.md) | the list of directed columns in the distribution | [optional] 
**type** | **int** | the type of this distribution. | [optional] 

## Example

```python
from openapi_client.models.u_sql_distribution_info import USqlDistributionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of USqlDistributionInfo from a JSON string
u_sql_distribution_info_instance = USqlDistributionInfo.from_json(json)
# print the JSON string representation of the object
print(USqlDistributionInfo.to_json())

# convert the object into a dict
u_sql_distribution_info_dict = u_sql_distribution_info_instance.to_dict()
# create an instance of USqlDistributionInfo from a dict
u_sql_distribution_info_from_dict = USqlDistributionInfo.from_dict(u_sql_distribution_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


