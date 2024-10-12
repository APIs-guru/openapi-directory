# ExtendedStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message giving detailed information about the status code. | [optional] 
**status_code** | [**ReservationStatusCode**](ReservationStatusCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_status_info import ExtendedStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedStatusInfo from a JSON string
extended_status_info_instance = ExtendedStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ExtendedStatusInfo.to_json())

# convert the object into a dict
extended_status_info_dict = extended_status_info_instance.to_dict()
# create an instance of ExtendedStatusInfo from a dict
extended_status_info_from_dict = ExtendedStatusInfo.from_dict(extended_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


