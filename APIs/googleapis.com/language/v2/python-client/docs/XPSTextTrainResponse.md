# XPSTextTrainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_model** | [**List[XPSTextComponentModel]**](XPSTextComponentModel.md) | Component submodels. | [optional] 

## Example

```python
from openapi_client.models.xps_text_train_response import XPSTextTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTextTrainResponse from a JSON string
xps_text_train_response_instance = XPSTextTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTextTrainResponse.to_json())

# convert the object into a dict
xps_text_train_response_dict = xps_text_train_response_instance.to_dict()
# create an instance of XPSTextTrainResponse from a dict
xps_text_train_response_from_dict = XPSTextTrainResponse.from_dict(xps_text_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


