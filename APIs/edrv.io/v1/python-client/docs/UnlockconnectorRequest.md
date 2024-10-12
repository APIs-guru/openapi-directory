# UnlockconnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **str** |  | [optional] 
**connector** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unlockconnector_request import UnlockconnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnlockconnectorRequest from a JSON string
unlockconnector_request_instance = UnlockconnectorRequest.from_json(json)
# print the JSON string representation of the object
print(UnlockconnectorRequest.to_json())

# convert the object into a dict
unlockconnector_request_dict = unlockconnector_request_instance.to_dict()
# create an instance of UnlockconnectorRequest from a dict
unlockconnector_request_from_dict = UnlockconnectorRequest.from_dict(unlockconnector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


