# SettlementTransactionAmountCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the commission. Acceptable values are: - \&quot;&#x60;animalsAndPetSupplies&#x60;\&quot; - \&quot;&#x60;dogCatFoodAndCatLitter&#x60;\&quot; - \&quot;&#x60;apparelAndAccessories&#x60;\&quot; - \&quot;&#x60;shoesHandbagsAndSunglasses&#x60;\&quot; - \&quot;&#x60;costumesAndAccessories&#x60;\&quot; - \&quot;&#x60;jewelry&#x60;\&quot; - \&quot;&#x60;watches&#x60;\&quot; - \&quot;&#x60;hobbiesArtsAndCrafts&#x60;\&quot; - \&quot;&#x60;homeAndGarden&#x60;\&quot; - \&quot;&#x60;entertainmentCollectibles&#x60;\&quot; - \&quot;&#x60;collectibleCoins&#x60;\&quot; - \&quot;&#x60;sportsCollectibles&#x60;\&quot; - \&quot;&#x60;sportingGoods&#x60;\&quot; - \&quot;&#x60;toysAndGames&#x60;\&quot; - \&quot;&#x60;musicalInstruments&#x60;\&quot; - \&quot;&#x60;giftCards&#x60;\&quot; - \&quot;&#x60;babyAndToddler&#x60;\&quot; - \&quot;&#x60;babyFoodWipesAndDiapers&#x60;\&quot; - \&quot;&#x60;businessAndIndustrial&#x60;\&quot; - \&quot;&#x60;camerasOpticsAndPhotography&#x60;\&quot; - \&quot;&#x60;consumerElectronics&#x60;\&quot; - \&quot;&#x60;electronicsAccessories&#x60;\&quot; - \&quot;&#x60;personalComputers&#x60;\&quot; - \&quot;&#x60;videoGameConsoles&#x60;\&quot; - \&quot;&#x60;foodAndGrocery&#x60;\&quot; - \&quot;&#x60;beverages&#x60;\&quot; - \&quot;&#x60;tobaccoProducts&#x60;\&quot; - \&quot;&#x60;furniture&#x60;\&quot; - \&quot;&#x60;hardware&#x60;\&quot; - \&quot;&#x60;buildingMaterials&#x60;\&quot; - \&quot;&#x60;tools&#x60;\&quot; - \&quot;&#x60;healthAndPersonalCare&#x60;\&quot; - \&quot;&#x60;beauty&#x60;\&quot; - \&quot;&#x60;householdSupplies&#x60;\&quot; - \&quot;&#x60;kitchenAndDining&#x60;\&quot; - \&quot;&#x60;majorAppliances&#x60;\&quot; - \&quot;&#x60;luggageAndBags&#x60;\&quot; - \&quot;&#x60;media&#x60;\&quot; - \&quot;&#x60;officeSupplies&#x60;\&quot; - \&quot;&#x60;softwareAndVideoGames&#x60;\&quot; - \&quot;&#x60;vehiclePartsAndAccessories&#x60;\&quot; - \&quot;&#x60;vehicleTiresAndWheels&#x60;\&quot; - \&quot;&#x60;vehicles&#x60;\&quot; - \&quot;&#x60;everythingElse&#x60;\&quot;  | [optional] 
**rate** | **str** | Rate of the commission in percentage. | [optional] 

## Example

```python
from openapi_client.models.settlement_transaction_amount_commission import SettlementTransactionAmountCommission

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementTransactionAmountCommission from a JSON string
settlement_transaction_amount_commission_instance = SettlementTransactionAmountCommission.from_json(json)
# print the JSON string representation of the object
print(SettlementTransactionAmountCommission.to_json())

# convert the object into a dict
settlement_transaction_amount_commission_dict = settlement_transaction_amount_commission_instance.to_dict()
# create an instance of SettlementTransactionAmountCommission from a dict
settlement_transaction_amount_commission_from_dict = SettlementTransactionAmountCommission.from_dict(settlement_transaction_amount_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


