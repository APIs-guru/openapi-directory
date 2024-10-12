# ArrayOfShareholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shareholder_details** | [**List[ShareholderDetails]**](ShareholderDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_shareholder_details import ArrayOfShareholderDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfShareholderDetails from a JSON string
array_of_shareholder_details_instance = ArrayOfShareholderDetails.from_json(json)
# print the JSON string representation of the object
print(ArrayOfShareholderDetails.to_json())

# convert the object into a dict
array_of_shareholder_details_dict = array_of_shareholder_details_instance.to_dict()
# create an instance of ArrayOfShareholderDetails from a dict
array_of_shareholder_details_from_dict = ArrayOfShareholderDetails.from_dict(array_of_shareholder_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


