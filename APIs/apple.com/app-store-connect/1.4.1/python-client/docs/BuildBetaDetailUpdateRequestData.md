# BuildBetaDetailUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BuildBetaDetailUpdateRequestDataAttributes**](BuildBetaDetailUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_beta_detail_update_request_data import BuildBetaDetailUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaDetailUpdateRequestData from a JSON string
build_beta_detail_update_request_data_instance = BuildBetaDetailUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BuildBetaDetailUpdateRequestData.to_json())

# convert the object into a dict
build_beta_detail_update_request_data_dict = build_beta_detail_update_request_data_instance.to_dict()
# create an instance of BuildBetaDetailUpdateRequestData from a dict
build_beta_detail_update_request_data_from_dict = BuildBetaDetailUpdateRequestData.from_dict(build_beta_detail_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


