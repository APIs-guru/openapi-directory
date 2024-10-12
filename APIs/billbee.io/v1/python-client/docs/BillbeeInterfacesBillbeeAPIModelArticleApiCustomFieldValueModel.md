# BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_id** | **int** |  | [optional] 
**definition** | [**BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel**](BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldDefinitionModel.md) |  | [optional] 
**definition_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_article_api_custom_field_value_model import BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel from a JSON string
billbee_interfaces_billbee_api_model_article_api_custom_field_value_model_instance = BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_article_api_custom_field_value_model_dict = billbee_interfaces_billbee_api_model_article_api_custom_field_value_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel from a dict
billbee_interfaces_billbee_api_model_article_api_custom_field_value_model_from_dict = BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel.from_dict(billbee_interfaces_billbee_api_model_article_api_custom_field_value_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


