# ProductStatusDataQualityIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**fetch_status** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 
**value_on_landing_page** | **str** |  | [optional] 
**value_provided** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_status_data_quality_issue import ProductStatusDataQualityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatusDataQualityIssue from a JSON string
product_status_data_quality_issue_instance = ProductStatusDataQualityIssue.from_json(json)
# print the JSON string representation of the object
print(ProductStatusDataQualityIssue.to_json())

# convert the object into a dict
product_status_data_quality_issue_dict = product_status_data_quality_issue_instance.to_dict()
# create an instance of ProductStatusDataQualityIssue from a dict
product_status_data_quality_issue_from_dict = ProductStatusDataQualityIssue.from_dict(product_status_data_quality_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


