# RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[RechnungsdruckWebAppControllersApiSearchControllerCustomerResult]**](RechnungsdruckWebAppControllersApiSearchControllerCustomerResult.md) |  | [optional] 
**orders** | [**List[RechnungsdruckWebAppControllersApiSearchControllerOrderResult]**](RechnungsdruckWebAppControllersApiSearchControllerOrderResult.md) |  | [optional] 
**products** | [**List[RechnungsdruckWebAppControllersApiSearchControllerProductResult]**](RechnungsdruckWebAppControllersApiSearchControllerProductResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_search_controller_search_results_model import RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel from a JSON string
rechnungsdruck_web_app_controllers_api_search_controller_search_results_model_instance = RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_search_controller_search_results_model_dict = rechnungsdruck_web_app_controllers_api_search_controller_search_results_model_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel from a dict
rechnungsdruck_web_app_controllers_api_search_controller_search_results_model_from_dict = RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel.from_dict(rechnungsdruck_web_app_controllers_api_search_controller_search_results_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


