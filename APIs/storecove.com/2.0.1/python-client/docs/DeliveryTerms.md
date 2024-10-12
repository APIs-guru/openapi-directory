# DeliveryTerms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_location_id** | **str** | The location to which the delivery terms refer. | [optional] 
**incoterms** | **str** | The incoterms: ++++ &lt;ul&gt;    &lt;li&gt;        &lt;strong&gt;EXW – Ex Works&lt;/strong&gt;&lt;br/&gt;        The seller must give the buyer access to goods at an agreed location. From that moment, the buyer bears almost all costs and risks during the entire shipping process.&lt;br/&gt;    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;FCA – Free Carrier&lt;/strong&gt;&lt;br/&gt;        The seller must make the goods available at his own risk and expense at his own premises or at an agreed place. In both cases, the seller is responsible for the clearance of the goods for export. It can be agreed that the buyer must instruct the carrier to transfer a “Bill of Lading (BL)” with a note on board to the seller.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;CPT – Carriage Paid To&lt;/strong&gt;&lt;br/&gt;        The seller has the same responsibilities as with FCA, but in this case also pays the delivery costs.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;CIP – Carriage Insurance Paid To&lt;/strong&gt;&lt;br/&gt;        The same seller responsibilities as with CPT, only in this case the seller is obliged to pay the insurance with a high coverage ratio. Parties can agree separately to apply limited coverage.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;DAP – Delivered At Place&lt;/strong&gt;&lt;br/&gt;        The seller bears the costs and risks during the transport of the goods to an agreed address. As soon as the goods have arrived at this address and are ready for unloading, the risk passes to the buyer.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;DPU – Delivered at Place Unloaded&lt;/strong&gt;&lt;br/&gt;        The seller is responsible for the costs and risks of delivering goods to an agreed destination where goods can be unloaded for further transport. The selling party arranges customs and unloads the goods at the agreed place. The buyer arranges the customs clearance and any associated rights.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;DDP – Delivered Duty Paid&lt;/strong&gt;&lt;br/&gt;        The seller bears the costs and risks of transport, carries out the export and import responsibilities and pays any import duties. As soon as the goods have arrived at the address and are ready for unloading, the risk passes to the buyer.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;FAS – Free Alongside Ship&lt;/strong&gt;&lt;br/&gt;        The seller bears all costs and risks until the goods are delivered next to the ship. From that point, the risk is for the buyer and he also arranges the export clearance and import clearance.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;FOB – Free On Board&lt;/strong&gt;&lt;br/&gt;        The seller bears all costs and risks until the goods are on board the ship and also arranges the export clearance. As soon as the goods have been delivered to the ship, the buyer bears all responsibilities.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;CFR – Cost And Freight&lt;/strong&gt;&lt;br/&gt;        The same applies to the seller and buyer as with FOB, but in this case, the seller must also pay for the transport of the goods to the port.    &lt;/li&gt;    &lt;li&gt;        &lt;strong&gt;CIF – Cost, Insurance, and Freight&lt;/strong&gt;&lt;br/&gt;        The seller has the same obligations as with CFR but also pays the (minimum) insurance costs. The buyer must pay for more comprehensive insurance.    &lt;/li&gt;&lt;/ul&gt; ++++ | [optional] 
**special_terms** | **str** | A description of special conditions relating to the delivery terms. | [optional] 

## Example

```python
from openapi_client.models.delivery_terms import DeliveryTerms

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryTerms from a JSON string
delivery_terms_instance = DeliveryTerms.from_json(json)
# print the JSON string representation of the object
print(DeliveryTerms.to_json())

# convert the object into a dict
delivery_terms_dict = delivery_terms_instance.to_dict()
# create an instance of DeliveryTerms from a dict
delivery_terms_from_dict = DeliveryTerms.from_dict(delivery_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


