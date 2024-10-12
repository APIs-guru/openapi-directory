# CreateGdprTestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**app_id** | **str** |  | [optional] 
**app_name** | **str** |  | [optional] 
**user_email** | **str** |  | [optional] 
**user_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_gdpr_test_data import CreateGdprTestData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGdprTestData from a JSON string
create_gdpr_test_data_instance = CreateGdprTestData.from_json(json)
# print the JSON string representation of the object
print(CreateGdprTestData.to_json())

# convert the object into a dict
create_gdpr_test_data_dict = create_gdpr_test_data_instance.to_dict()
# create an instance of CreateGdprTestData from a dict
create_gdpr_test_data_from_dict = CreateGdprTestData.from_dict(create_gdpr_test_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


