import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { SourceDetail } from "./sourcedetail";



// Source
/** 
 * Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner: OwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceDetails", elemType: SourceDetail })
  sourceDetails?: SourceDetail[];

  @SpeakeasyMetadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier: string;
}
