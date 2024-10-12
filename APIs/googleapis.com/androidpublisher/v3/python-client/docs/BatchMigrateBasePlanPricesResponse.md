# BatchMigrateBasePlanPricesResponse

Response message for BatchMigrateBasePlanPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | **List[object]** | Contains one response per requested price migration, in the same order as the request. | [optional] 

## Example

```python
from openapi_client.models.batch_migrate_base_plan_prices_response import BatchMigrateBasePlanPricesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchMigrateBasePlanPricesResponse from a JSON string
batch_migrate_base_plan_prices_response_instance = BatchMigrateBasePlanPricesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchMigrateBasePlanPricesResponse.to_json())

# convert the object into a dict
batch_migrate_base_plan_prices_response_dict = batch_migrate_base_plan_prices_response_instance.to_dict()
# create an instance of BatchMigrateBasePlanPricesResponse from a dict
batch_migrate_base_plan_prices_response_from_dict = BatchMigrateBasePlanPricesResponse.from_dict(batch_migrate_base_plan_prices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


