# PaginatedWebServicesList

Paginated list of web services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[WebService]**](WebService.md) | An array of web service objects. | [optional] 

## Example

```python
from openapi_client.models.paginated_web_services_list import PaginatedWebServicesList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedWebServicesList from a JSON string
paginated_web_services_list_instance = PaginatedWebServicesList.from_json(json)
# print the JSON string representation of the object
print(PaginatedWebServicesList.to_json())

# convert the object into a dict
paginated_web_services_list_dict = paginated_web_services_list_instance.to_dict()
# create an instance of PaginatedWebServicesList from a dict
paginated_web_services_list_from_dict = PaginatedWebServicesList.from_dict(paginated_web_services_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


