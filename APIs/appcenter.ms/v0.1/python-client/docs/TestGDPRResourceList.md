# TestGDPRResourceList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**List[TestGdprExportAccounts200ResponseResourcesInner]**](TestGdprExportAccounts200ResponseResourcesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_gdpr_resource_list import TestGDPRResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of TestGDPRResourceList from a JSON string
test_gdpr_resource_list_instance = TestGDPRResourceList.from_json(json)
# print the JSON string representation of the object
print(TestGDPRResourceList.to_json())

# convert the object into a dict
test_gdpr_resource_list_dict = test_gdpr_resource_list_instance.to_dict()
# create an instance of TestGDPRResourceList from a dict
test_gdpr_resource_list_from_dict = TestGDPRResourceList.from_dict(test_gdpr_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


