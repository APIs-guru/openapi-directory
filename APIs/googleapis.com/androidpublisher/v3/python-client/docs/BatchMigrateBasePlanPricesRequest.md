# BatchMigrateBasePlanPricesRequest

Request message for BatchMigrateBasePlanPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[MigrateBasePlanPricesRequest]**](MigrateBasePlanPricesRequest.md) | Required. Up to 100 price migration requests. All requests must update different base plans. | [optional] 

## Example

```python
from openapi_client.models.batch_migrate_base_plan_prices_request import BatchMigrateBasePlanPricesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchMigrateBasePlanPricesRequest from a JSON string
batch_migrate_base_plan_prices_request_instance = BatchMigrateBasePlanPricesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchMigrateBasePlanPricesRequest.to_json())

# convert the object into a dict
batch_migrate_base_plan_prices_request_dict = batch_migrate_base_plan_prices_request_instance.to_dict()
# create an instance of BatchMigrateBasePlanPricesRequest from a dict
batch_migrate_base_plan_prices_request_from_dict = BatchMigrateBasePlanPricesRequest.from_dict(batch_migrate_base_plan_prices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


