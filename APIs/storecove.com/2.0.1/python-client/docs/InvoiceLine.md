# InvoiceLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_cost** | **str** | The buyer&#39;s accounting cost centre for this invoice line, expressed as text. | [optional] 
**additional_item_properties** | [**List[AdditionalItemProperty]**](AdditionalItemProperty.md) | An array of additional item properties. | [optional] 
**allowance_charge** | **float** | The discount or surcharge on this item. Should be negative for discounts | [optional] 
**allowance_charges** | [**List[LineAllowanceCharge]**](LineAllowanceCharge.md) | An array of allowance charges. NOTE: this is currently supported only when sending from/to Italy. | [optional] 
**amount_excluding_tax** | **float** | The amount excluding tax. EXPERIMENTAL. Use amountExcludingVat. | [optional] 
**amount_excluding_vat** | **float** | The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge. | [optional] 
**amount_including_tax** | **float** | The amount including tax. Can only be used for \&quot;priceMode\&quot;: \&quot;price_mode_gross\&quot;. Use either this property or amountExcludingTax (amountExcludingVat). | [optional] 
**buyers_item_identification** | **str** | DEPRECATED. Use the references array with &#39;line_buyers_item_identification&#39; documentType. The ID the buyer assigned to this item. | [optional] 
**description** | **str** | The description for this invoice line. | [optional] 
**invoice_period** | **str** | The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd. | [optional] 
**item_price** | **float** | The price per item (may be fractional) | [optional] [default to 1]
**line_id** | **str** | The id for this invoice line. | [optional] 
**name** | **str** | A short name for this invoice line. If not provided, it will be taken from description and description will be set to an emtpy string. | [optional] 
**note** | **str** | A note to add to the document line | [optional] 
**order_line_reference_line_id** | **str** | A reference to the LineID of the order. The order itself is specified as the orderReference at the invoice level. It is not possible to specify an orderReference at the invoice line level. An invoice MUST at this time be for a single order only. | [optional] 
**quantity** | **float** | The number of items (may be fractional). | [optional] [default to 1]
**quantity_unit_code** | **str** | The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the \&quot;Intro\&quot; section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8 | [optional] [default to 'C62']
**references** | [**List[Reference]**](Reference.md) | An array of references to other documents or codes. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with &#39;,&#39;. Also, not all syntaxes support all documentTypes. | [optional] 
**sellers_item_identification** | **str** | DEPRECATED. Use the references array with &#39;line_sellers_item_identification&#39; documentType. The ID the seller assigned to this item. | [optional] 
**standard_item_identification** | **str** | Standardized ID for the item. | [optional] 
**standard_item_identification_scheme_agency_id** | **str** | DEPRECATED. Use the references array with &#39;line_standard_item_identification&#39; documentType. The scheme agency for the standardized ID for the item. | [optional] [default to '9']
**standard_item_identification_scheme_id** | **str** | DEPRECATED. Use the references array with &#39;line_standard_item_identification&#39; documentType. The scheme for the standardized ID for the item. | [optional] [default to 'GTIN']
**tax** | [**Tax**](Tax.md) |  | [optional] 
**taxes_duties_fees** | [**List[Tax]**](Tax.md) | An array of taxes, duties and fees for this invoice line. Multiple taxesDutiesFees items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array. | [optional] 

## Example

```python
from openapi_client.models.invoice_line import InvoiceLine

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceLine from a JSON string
invoice_line_instance = InvoiceLine.from_json(json)
# print the JSON string representation of the object
print(InvoiceLine.to_json())

# convert the object into a dict
invoice_line_dict = invoice_line_instance.to_dict()
# create an instance of InvoiceLine from a dict
invoice_line_from_dict = InvoiceLine.from_dict(invoice_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


