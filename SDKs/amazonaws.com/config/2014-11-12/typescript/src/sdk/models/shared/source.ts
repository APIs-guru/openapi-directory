import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OwnerEnum } from "./ownerenum";
import { SourceDetail } from "./sourcedetail";


// Source
/** 
 * Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=Owner" })
  owner: OwnerEnum;

  @Metadata({ data: "json, name=SourceDetails", elemType: shared.SourceDetail })
  sourceDetails?: SourceDetail[];

  @Metadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier: string;
}
