# AddressCheckResultObject

This object holds the address that was checked and the results associated with said checks. You can also leave the checkResult blank/nil if there are no results for that address if you wish.  This is useful for returning results on a freshly crerated entity where the API user would want to confirm that the data has indeed been stored, and be able to capture relevant addressIDs - perhaps to address issues as to why it wasn't checked. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressObject**](AddressObject.md) |  | [optional] 
**check_result** | [**List[GeneralCheckResultObject]**](GeneralCheckResultObject.md) | An array in reverse chronological order of all checks done on this data point for the given entity. Older checks may have been previously done by you or another institution, and if so, these will be listed. | [optional] 

## Example

```python
from openapi_client.models.address_check_result_object import AddressCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of AddressCheckResultObject from a JSON string
address_check_result_object_instance = AddressCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(AddressCheckResultObject.to_json())

# convert the object into a dict
address_check_result_object_dict = address_check_result_object_instance.to_dict()
# create an instance of AddressCheckResultObject from a dict
address_check_result_object_from_dict = AddressCheckResultObject.from_dict(address_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


