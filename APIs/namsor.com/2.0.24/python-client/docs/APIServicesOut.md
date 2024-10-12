# APIServicesOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_services** | [**List[APIServiceOut]**](APIServiceOut.md) | List of API Services | [optional] 

## Example

```python
from openapi_client.models.api_services_out import APIServicesOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIServicesOut from a JSON string
api_services_out_instance = APIServicesOut.from_json(json)
# print the JSON string representation of the object
print(APIServicesOut.to_json())

# convert the object into a dict
api_services_out_dict = api_services_out_instance.to_dict()
# create an instance of APIServicesOut from a dict
api_services_out_from_dict = APIServicesOut.from_dict(api_services_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


