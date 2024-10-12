# EndpointIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of message channels this endpoint listens to (omit for all) | [optional] 
**description** | **str** |  | [optional] [default to '']
**disabled** | **bool** |  | [optional] [default to False]
**filter_types** | **List[str]** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 
**rate_limit** | **int** |  | [optional] 
**secret** | **str** | The endpoint&#39;s verification secret. If &#x60;null&#x60; is passed, a secret is automatically generated. Format: &#x60;base64&#x60; encoded random bytes optionally prefixed with &#x60;whsec_&#x60;. Recommended size: 24. | [optional] 
**uid** | **str** | Optional unique identifier for the endpoint | [optional] 
**url** | **str** |  | 
**version** | **int** |  | 

## Example

```python
from openapi_client.models.endpoint_in import EndpointIn

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointIn from a JSON string
endpoint_in_instance = EndpointIn.from_json(json)
# print the JSON string representation of the object
print(EndpointIn.to_json())

# convert the object into a dict
endpoint_in_dict = endpoint_in_instance.to_dict()
# create an instance of EndpointIn from a dict
endpoint_in_from_dict = EndpointIn.from_dict(endpoint_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


