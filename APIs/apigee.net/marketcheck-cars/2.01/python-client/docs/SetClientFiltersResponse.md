# SetClientFiltersResponse

A client filters response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Description of operation | [optional] 
**status** | **int** | status code of operation | [optional] 

## Example

```python
from openapi_client.models.set_client_filters_response import SetClientFiltersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetClientFiltersResponse from a JSON string
set_client_filters_response_instance = SetClientFiltersResponse.from_json(json)
# print the JSON string representation of the object
print(SetClientFiltersResponse.to_json())

# convert the object into a dict
set_client_filters_response_dict = set_client_filters_response_instance.to_dict()
# create an instance of SetClientFiltersResponse from a dict
set_client_filters_response_from_dict = SetClientFiltersResponse.from_dict(set_client_filters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


