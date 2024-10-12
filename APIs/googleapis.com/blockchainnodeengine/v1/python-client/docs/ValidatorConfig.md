# ValidatorConfig

Configuration for validator-related parameters on the beacon client, and for any GCP-managed validator client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beacon_fee_recipient** | **str** | An Ethereum address which the beacon client will send fee rewards to if no recipient is configured in the validator client. See https://lighthouse-book.sigmaprime.io/suggested-fee-recipient.html or https://docs.prylabs.network/docs/execution-node/fee-recipient for examples of how this is used. Note that while this is often described as \&quot;suggested\&quot;, as we run the execution node we can trust the execution node, and therefore this is considered enforced. | [optional] 
**managed_validator_client** | **bool** | Immutable. When true, deploys a GCP-managed validator client alongside the beacon client. | [optional] 
**mev_relay_urls** | **List[str]** | URLs for MEV-relay services to use for block building. When set, a GCP-managed MEV-boost service is configured on the beacon client. | [optional] 

## Example

```python
from openapi_client.models.validator_config import ValidatorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ValidatorConfig from a JSON string
validator_config_instance = ValidatorConfig.from_json(json)
# print the JSON string representation of the object
print(ValidatorConfig.to_json())

# convert the object into a dict
validator_config_dict = validator_config_instance.to_dict()
# create an instance of ValidatorConfig from a dict
validator_config_from_dict = ValidatorConfig.from_dict(validator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


