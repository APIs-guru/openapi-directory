# AncillaryServiceEndorsement

[Ancillary service endorsements](https://pe.usps.com/text/qsg300/Q507.htm) are used by mailers to request an addressee's new address and to provide the carrier with instructions on how to handle packages that are undeliverable as addressed.  | Ancillary Service Endorsement  | Description |--------------------------------|----------------------------------------------------- | `none`                         | No ancillary service is requested. Depending on the carrier servive, the package may be forwarded, returned, or discarded. | `return_service_requested`     | The package is returned to the sender. If possible, notification of the new address is is included with the returned package. | `forwarding_service_requested` | Forward the package to the new address, if possible; otherwise, return it to the sender. | `address_service_requested`    | Forward the package to the new address, if possible; otherwise, return it to the sender. This is similar to `forwarding_service_requested`, but different restrictions and charges may apply. | `change_service_requested`     | The package is discarded. If possible, notification of the new address is sent to the sender. | `leave_if_no_response`         | 

## Enum

* `NONE` (value: `'none'`)

* `RETURN_SERVICE_REQUESTED` (value: `'return_service_requested'`)

* `FORWARDING_SERVICE_REQUESTED` (value: `'forwarding_service_requested'`)

* `ADDRESS_SERVICE_REQUESTED` (value: `'address_service_requested'`)

* `CHANGE_SERVICE_REQUESTED` (value: `'change_service_requested'`)

* `LEAVE_IF_NO_RESPONSE` (value: `'leave_if_no_response'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


