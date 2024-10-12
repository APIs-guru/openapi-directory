# WeakCert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**sign_algorithm** | **str** |  | [optional] 
**subject_name** | **str** |  | [optional] 
**thumb_print** | **str** |  | [optional] 
**valid_from** | **str** |  | [optional] 
**valid_to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.weak_cert import WeakCert

# TODO update the JSON string below
json = "{}"
# create an instance of WeakCert from a JSON string
weak_cert_instance = WeakCert.from_json(json)
# print the JSON string representation of the object
print(WeakCert.to_json())

# convert the object into a dict
weak_cert_dict = weak_cert_instance.to_dict()
# create an instance of WeakCert from a dict
weak_cert_from_dict = WeakCert.from_dict(weak_cert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


