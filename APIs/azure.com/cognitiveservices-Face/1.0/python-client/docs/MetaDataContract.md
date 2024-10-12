# MetaDataContract

A combination of user defined name and user specified data and recognition model name for largePersonGroup/personGroup, and largeFaceList/faceList.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.meta_data_contract import MetaDataContract

# TODO update the JSON string below
json = "{}"
# create an instance of MetaDataContract from a JSON string
meta_data_contract_instance = MetaDataContract.from_json(json)
# print the JSON string representation of the object
print(MetaDataContract.to_json())

# convert the object into a dict
meta_data_contract_dict = meta_data_contract_instance.to_dict()
# create an instance of MetaDataContract from a dict
meta_data_contract_from_dict = MetaDataContract.from_dict(meta_data_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


