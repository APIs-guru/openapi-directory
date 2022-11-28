import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostProperties
/** 
 * Describes the properties of a Dedicated Host.
**/
export class HostProperties extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cores?: number;

  @SpeakeasyMetadata()
  instanceFamily?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  sockets?: number;

  @SpeakeasyMetadata()
  totalVCpus?: number;
}
